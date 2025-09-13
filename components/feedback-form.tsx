"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StarRating } from "@/components/star-rating"
import { createClient } from "@/lib/supabase/client"
import { toast } from "@/hooks/use-toast"

interface FeedbackFormProps {
  onFeedbackSubmitted: () => void
}

export function FeedbackForm({ onFeedbackSubmitted }: FeedbackFormProps) {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [rating, setRating] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !message.trim() || rating === 0) {
      toast({
        title: "Please fill in all fields",
        description: "Name, message, and rating are required.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)
    const supabase = createClient()

    try {
      const { error } = await supabase.from("feedback").insert({
        name: name.trim(),
        message: message.trim(),
        rating,
      })

      if (error) {
        if (error.message.includes("table") && error.message.includes("feedback")) {
          toast({
            title: "Database Setup Required",
            description: "The feedback table needs to be created. Please run the database setup script first.",
            variant: "destructive",
          })
        } else {
          throw error
        }
        return
      }

      // Reset form
      setName("")
      setMessage("")
      setRating(0)

      toast({
        title: "Feedback submitted!",
        description: "Thank you for your feedback.",
      })

      onFeedbackSubmitted()
    } catch (error) {
      console.error("Error submitting feedback:", error)
      toast({
        title: "Error submitting feedback",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-white/50 backdrop-blur-sm border-sage-200">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-sage-800">Send me a feedback</CardTitle>
        <p className="text-sage-600">I'd love to hear your thoughts and feedback about my work.</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-sage-700 font-medium">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="mt-1 border-sage-200 focus:border-sage-400"
              required
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-sage-700 font-medium">
              Feedback Message
            </Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share your thoughts, suggestions, or feedback..."
              rows={4}
              className="mt-1 border-sage-200 focus:border-sage-400 resize-none"
              required
            />
          </div>

          <div>
            <Label className="text-sage-700 font-medium">Rating</Label>
            <div className="mt-2">
              <StarRating rating={rating} onRatingChange={setRating} />
              <p className="text-sm text-sage-500 mt-1">
                {rating === 0 && "Please select a rating"}
                {rating === 1 && "Poor"}
                {rating === 2 && "Fair"}
                {rating === 3 && "Good"}
                {rating === 4 && "Very Good"}
                {rating === 5 && "Excellent"}
              </p>
            </div>
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full bg-green-600 hover:bg-green-700 text-white">
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
