import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

// calls PG table which allows us to create a table
export const EntryTable = pgTable('entry', {
  // id uuid GENERATED ALWAYS AS IDENTITY, PRIMARY KEY (id)
  id: uuid().primaryKey().defaultRandom(),
  // title TEXT NOT NULL,
  title: text().notNull(),
  // body TEXT NOT NULL,
  body: text().notNull(),
  // createdAt TIMESTAMPTZ NOT NULL DEFAULT now()
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),

  // updatedAt TIMESTAMPTZ NOT NULL DEFAULT now()
  // going to call onUpdate function which allows us to run javascript code to create a new value anytime we do an update.
  // so anytime we update our fields, we want to make sure we call this function and it's just going to use a new date anytime we do an update
  updatedAt: timestamp({ withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
})

// tell drizzle how our page table relates to other tables
// pass in the table we want to do our relations for
// this is going to take in a function that has a one and a many property so we can determine things like one-to-one relationships and many-to-many relationships and so on

// export const EntryRelationships = (EntryTable, {one, many} => ({
//     // specify all our different relationships here
// }))