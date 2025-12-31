-- Projects Table: Stores the portfolio content
CREATE TABLE projects (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  tech_stack TEXT[], -- Array: ['Python', 'SQL', 'AWS']
  source_system TEXT, -- e.g., 'S3 Bucket'
  target_system TEXT, -- e.g., 'Snowflake'
  github_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Messages Table: For the contact form
CREATE TABLE messages (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  email TEXT,
  content TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);