import { pgTable, text, timestamp, integer } from 'drizzle-orm/pg-core';

export const userTable = pgTable('user', {
  id: text('id').primaryKey(),
  email: text('email').unique(),
  profilePictureUrl: text('profile_picture_url'),
  name: text('name'),
  createdAt: timestamp('created_at', {
    withTimezone: true,
    mode: 'date',
  })
    .defaultNow()
    .notNull(),
});

export const oauthAccountTable = pgTable('oauth_account', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => userTable.id),
  provider: text('provider').notNull(),
  providerUserId: text('provider_user_id').notNull(),
  accessToken: text('access_token').notNull(),
  refreshToken: text('refresh_token'),
  expiresAt: timestamp('expires_at', {
    withTimezone: true,
    mode: 'date',
  }),
});

export const sessionTable = pgTable('session', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => userTable.id),
  expiresAt: timestamp('expires_at', {
    withTimezone: true,
    mode: 'date',
  }).notNull(),
});

export const projectTable = pgTable('project', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => userTable.id),
  name: text('name').notNull(),
  createdAt: timestamp('created_at', {
    withTimezone: true,
    mode: 'date',
  })
    .defaultNow()
    .notNull(),
});

export const feedbackTable = pgTable('feedback', {
  id: integer('id').primaryKey(),
  category: text('category').notNull(),
  createdAt: timestamp('created_at', {
    withTimezone: true,
    mode: 'date',
  })
    .defaultNow()
    .notNull(),
  origin: text('origin'),
  projectId: text('project_id')
    .notNull()
    .references(() => projectTable.id),
  status: text('status').default('new').notNull(),
  content: text('content').notNull(),
  userId: text('user_id').default(''),
});

export const feedbackCounterTable = pgTable('feedback_counter', {
  count: integer('coutner').notNull(),
});

export const orderTable = pgTable('order', {
  id: text('id').primaryKey(),
  userEmail: text('user_email').notNull(),
  status: text('status').notNull(),
  total: integer('total').notNull(),
  currency: text('currency').notNull(),
  createdAt: timestamp('created_at', {
    withTimezone: true,
    mode: 'date',
  })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp('updated_at', {
    withTimezone: true,
    mode: 'date',
  })
    .defaultNow()
    .notNull(),
  orderId: text('order_id').notNull(),
});
