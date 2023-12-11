exports.up = function (knex) {
    return knex.schema
        .createTable('roles', roles => {
            roles.increments('role_id')
            roles.string('role_name', 32).notNullable().unique()
        })
        .createTable('users', users => {
            users.increments('user_id')
            users.string('username', 32).notNullable().unique()
            users.string('password', 128).notNullable()
            users.integer('role_id')
                .unsigned()
                .notNullable()
                .references('role_id')
                .inTable('roles')
                .onUpdate('RESTRICT')
                .onDelete('RESTRICT')
        })
        .createTable('projects', projects => {
            projects.increments('project_id').notNullable().unique()
            projects.string('project_name', 64).notNullable()
        })
        .createTable('tickets', tickets => {
            tickets.increments('ticket_id').notNullable().unique()
            tickets.integer('ticket_project')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
            tickets.string('ticket_title', 256).notNullable()
            tickets.string('creation_date', 32)
                .notNullable()
            tickets.string('severity', 32)
                .notNullable()
            tickets.string('status', 32)
                .notNullable()
        })
        .createTable('tasks', tasks => {
            tasks.increments('task_id').notNullable().unique()
            tasks.integer('task_project')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
            tasks.string('task_title', 256).notNullable()
            tasks.string('creation_date', 32)
                .notNullable()
            tasks.string('status', 32)
                .notNullable()
        })
}

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('tickets')
        .dropTableIfExists('projects')
        .dropTableIfExists('users')
        .dropTableIfExists('roles')
}