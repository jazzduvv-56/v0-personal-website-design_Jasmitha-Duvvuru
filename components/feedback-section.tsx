"use client"

import { useState, useEffect } from "react"
import { FeedbackForm } from "@/components/feedback-form"
import { FeedbackCard } from "@/components/feedback-card"
import { createClient } from "@/lib/supabase/client"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Feedback {
  id: string
  name: string
  message: string
  rating: number
  created_at: string
}

export function FeedbackSection() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const fetchFeedbacks = async () => {
    const supabase = createClient()

    try {
      console.log("[v0] Attempting to fetch feedbacks from Supabase...")

      const { data, error } = await supabase.from("feedback").select("*").order("created_at", { ascending: false })

      console.log("[v0] Supabase response:", { data, error })

      if (error) {
        console.error("[v0] Supabase error:", error)
        setHasError(true)
        setErrorMessage(`Database error: ${error.message}`)
      } else {
        console.log("[v0] Successfully fetched feedbacks:", data?.length || 0)
        setFeedbacks(data || [])
        setHasError(false)
        setErrorMessage("")
      }
    } catch (error) {
      console.error("[v0] Unexpected error:", error)
      setHasError(true)
      setErrorMessage("Unable to connect to database. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchFeedbacks()

    if (!hasError) {
      const supabase = createClient()
      const channel = supabase
        .channel("feedback_changes")
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "feedback",
          },
          (payload) => {
            console.log("[v0] Real-time feedback received:", payload.new)
            const newFeedback = payload.new as Feedback
            setFeedbacks((prev) => [newFeedback, ...prev])
          },
        )
        .subscribe()

      return () => {
        supabase.removeChannel(channel)
      }
    }
  }, [hasError])

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-sage-800 mb-4">Feedback</h2>
          <p className="text-sage-600 max-w-2xl mx-auto">
            Your feedback helps me improve and grow. Share your thoughts about my work and experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <FeedbackForm onFeedbackSubmitted={fetchFeedbacks} />

          <div>
            <h3 className="text-xl font-semibold text-sage-800 mb-4">Recent Feedback ({feedbacks.length})</h3>

            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-6 w-6 animate-spin text-sage-600" />
                <span className="ml-2 text-sage-600">Loading feedback...</span>
              </div>
            ) : hasError ? (
              <div className="text-center py-8 text-red-600 bg-red-50 rounded-lg border border-red-200">
                <p className="font-medium">Connection Issue</p>
                <p className="text-sm mt-1">{errorMessage}</p>
                <Button
                  onClick={fetchFeedbacks}
                  variant="outline"
                  size="sm"
                  className="mt-3 border-red-300 text-red-600 hover:bg-red-50 bg-transparent"
                >
                  Retry Connection
                </Button>
              </div>
            ) : feedbacks.length === 0 ? (
              <div className="text-center py-8 text-sage-500">
                <p>No feedback yet. Be the first to share your thoughts!</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {feedbacks.map((feedback) => (
                  <FeedbackCard
                    key={feedback.id}
                    name={feedback.name}
                    message={feedback.message}
                    rating={feedback.rating}
                    createdAt={feedback.created_at}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
