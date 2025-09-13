import { StarRating } from "@/components/star-rating"
import { Card, CardContent } from "@/components/ui/card"
import { formatDistanceToNow } from "date-fns"

interface FeedbackCardProps {
  name: string
  message: string
  rating: number
  createdAt: string
}

export function FeedbackCard({ name, message, rating, createdAt }: FeedbackCardProps) {
  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true })

  return (
    <Card className="bg-white/50 backdrop-blur-sm border-sage-200 hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="font-semibold text-sage-800">{name}</h4>
            <p className="text-sm text-sage-500">{timeAgo}</p>
          </div>
          <StarRating rating={rating} readonly size="sm" />
        </div>
        <p className="text-sage-700 leading-relaxed">{message}</p>
      </CardContent>
    </Card>
  )
}
