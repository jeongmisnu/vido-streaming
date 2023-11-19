import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * Image 등 기타 파일을 주로 저장함
 */
@Entity()
export class File {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  path: string;

  @Column({ default: 'image/jpeg' })
  format: string;

  @Column({ default: 0 })
  size: number;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
