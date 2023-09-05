import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    const todos = await ctx.db.query("todos").order("desc").take(100);
    return todos;
  },
});

export const save = mutation({
  args: { 
    title: v.string(),
    body: v.string(),
    priority: v.string(),
    dateCreated: v.string(), 
    dateDeadline: v.string()
  },
  handler: async (ctx, { title, body, priority, dateCreated,  dateDeadline}) => {
    await ctx.db.insert("todos", { title, body, priority, dateCreated, dateDeadline });
  },
});
