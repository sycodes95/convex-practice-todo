import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    const todos = await ctx.db.query("todos").order("desc").take(100);
    return todos;
  },
});

export const send = mutation({
  args: { 
    title: v.string(),
    body: v.string(),
    priority: v.boolean(),
    date: v.string(), 
  },
  handler: async (ctx, { title, body, priority, date }) => {
    await ctx.db.insert("todos", { title, body, priority, date  });
  },
});
