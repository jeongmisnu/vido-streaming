import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * Video or Audio 데이터를 가지고 2차 창작한 파일만 저장
 * 단순 하게 자막을 붙이거나 잘라서 클립으로 만드는 등
 * 모든 원작에 변형을 일으키면 저장시 미디어 파일로 이동
 */
@Entity()
export class Media {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column({ default: '' })
  user_id: string;

  @Column({ default: '' })
  title: string;

  @Column({ default: '' })
  content: string;

  @Column({ default: '' })
  caption: string;

  @Column({ default: '' })
  sync: string;

  @Column({ default: '' })
  source: string;

  @Column({ default: '0.0.1' })
  version: string;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
