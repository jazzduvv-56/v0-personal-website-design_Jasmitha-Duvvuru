-- Create feedback table for storing user feedback (Version 2)
-- Drop table if it exists to ensure clean creation
DROP TABLE IF EXISTS public.feedback;

-- Create feedback table
CREATE TABLE public.feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since this is a public feedback system)
-- Allow anyone to read feedback
CREATE POLICY "Allow public read access" ON public.feedback
  FOR SELECT USING (true);

-- Allow anyone to insert feedback
CREATE POLICY "Allow public insert access" ON public.feedback
  FOR INSERT WITH CHECK (true);

-- Insert some sample feedback for testing
INSERT INTO public.feedback (name, message, rating) VALUES
  ('John Doe', 'Great portfolio! Really impressed with your data engineering projects.', 5),
  ('Sarah Smith', 'Love the clean design and the detailed project descriptions. Keep up the excellent work!', 4),
  ('Mike Johnson', 'Your healthcare payment system project caught my attention. Would love to discuss potential collaboration.', 5);
