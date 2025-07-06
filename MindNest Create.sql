SET search_path TO mindnest;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS boards CASCADE;
DROP TABLE IF EXISTS users_boards CASCADE;
DROP TABLE IF EXISTS notes CASCADE;
-- DROP TABLE IF EXISTS notes_text CASCADE;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    created TIMESTAMP DEFAULT NOW(),
    modified TIMESTAMP DEFAULT NOW()
);

CREATE TABLE boards (
	board_id SERIAL PRIMARY KEY,
	board_name VARCHAR(255) NOT NULL,
	created TIMESTAMP DEFAULT NOW(),
    modified TIMESTAMP DEFAULT NOW(),
    created_by INTEGER,
    FOREIGN KEY (created_by) REFERENCES users(user_id) ON DELETE SET NULL
);

CREATE TABLE users_boards (
    user_id INTEGER NOT NULL,
    board_id INTEGER NOT NULL,
	role VARCHAR(50) NOT NULL DEFAULT 'viewer',
    joined_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (user_id, board_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (board_id) REFERENCES boards(board_id) ON DELETE CASCADE
);

CREATE TABLE notes (
	note_id SERIAL PRIMARY KEY,
	note_title VARCHAR(255) NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT FALSE,
	position INTEGER,
	created TIMESTAMP DEFAULT NOW(),
    modified TIMESTAMP DEFAULT NOW(),
	parent_note INTEGER,
	board_id INTEGER NOT NULL,
    created_by INTEGER,
    modified_by INTEGER,
	FOREIGN KEY (parent_note) REFERENCES notes(note_id) ON DELETE CASCADE,
	FOREIGN KEY (board_id) REFERENCES boards(board_id) ON DELETE CASCADE,
    FOREIGN KEY (created_by) REFERENCES users(user_id) ON DELETE SET NULL,
    FOREIGN KEY (modified_by) REFERENCES users(user_id) ON DELETE SET NULL
);

-- CREATE TABLE notes_text (
--     text_id SERIAL PRIMARY KEY,
--     content TEXT,
--     note_id INTEGER NOT NULL,
--     created TIMESTAMP DEFAULT NOW(),
--     modified TIMESTAMP DEFAULT NOW(),
-- 	created_by INTEGER,
--     modified_by INTEGER,
--     FOREIGN KEY (note_id) REFERENCES notes(note_id) ON DELETE CASCADE,
-- 	FOREIGN KEY (created_by) REFERENCES users(user_id) ON DELETE SET NULL,
--     FOREIGN KEY (modified_by) REFERENCES users(user_id) ON DELETE SET NULL
-- );