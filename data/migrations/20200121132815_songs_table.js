
exports.up = function (knex) {
  return knex.schema.createTable ('Songs', (table) => {
    table
      .uuid ('Id')
      .primary ()
    table
      .timestamps (true, true)
    // table
    //   .increments ('Id')
    //   .primary ()
    table
      .string ('Name', 255)
      .index ()
    table
      .string ('Artist', 255)
      .index ()
    table
      .integer ('Duration')
    table
      .boolean ('Favorite')
      .defaultTo (false)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists ('Songs')
}
