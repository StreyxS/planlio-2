-- Create plans table
create table if not exists public.plans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  description text,
  platform text not null default 'instagram',
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Create posts table
create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  plan_id uuid not null references public.plans(id) on delete cascade,
  title text not null,
  description text,
  platform text not null default 'instagram',
  scheduled_date date not null,
  type text,
  suggested_time text,
  status text default 'draft',
  notes text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable Row Level Security
alter table public.plans enable row level security;
alter table public.posts enable row level security;

-- Plans policies
create policy "Allow users to view their own plans" on public.plans for select using (auth.uid() = user_id);
create policy "Allow users to create their own plans" on public.plans for insert with check (auth.uid() = user_id);
create policy "Allow users to update their own plans" on public.plans for update using (auth.uid() = user_id);
create policy "Allow users to delete their own plans" on public.plans for delete using (auth.uid() = user_id);

-- Posts policies (access through plans)
create policy "Allow users to view posts in their plans" on public.posts for select using (
  exists (select 1 from public.plans where public.plans.id = public.posts.plan_id and public.plans.user_id = auth.uid())
);
create policy "Allow users to create posts in their plans" on public.posts for insert with check (
  exists (select 1 from public.plans where public.plans.id = public.posts.plan_id and public.plans.user_id = auth.uid())
);
create policy "Allow users to update posts in their plans" on public.posts for update using (
  exists (select 1 from public.plans where public.plans.id = public.posts.plan_id and public.plans.user_id = auth.uid())
);
create policy "Allow users to delete posts in their plans" on public.posts for delete using (
  exists (select 1 from public.plans where public.plans.id = public.posts.plan_id and public.plans.user_id = auth.uid())
);
