import { Migration } from '@mikro-orm/migrations';

export class Migration20250909061938 extends Migration {

  override up(): void {
    this.addSql(`create table "users" ("id" serial primary key, "email" varchar(255) not null, "password" varchar(255) not null, "is_active" boolean not null default false, "created_at" timestamptz not null, "updated_at" timestamptz not null);`);
    this.addSql(`alter table "users" add constraint "users_email_unique" unique ("email");`);
  }

  override down(): void {
    this.addSql(`drop table if exists "users" cascade;`);
  }

}
