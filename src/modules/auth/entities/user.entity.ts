
import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';

@Entity({ tableName: 'users' })
export class UserEntity {
  @PrimaryKey()
  id!: number;

  @Unique()
  @Property()
  email!: string;

  @Property()
  password!: string;

  @Property({ default: false })
  is_active = false;

  @Property()
  created_at = new Date();

  @Property({ onUpdate: () => new Date() })
  updated_at = new Date();

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}