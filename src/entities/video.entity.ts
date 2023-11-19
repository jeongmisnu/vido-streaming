import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * 비디오의 위치를 저장함 직접적인 데이터를 넣는건 지양
 * 다른 포멧의 비디오의 경우 webm으로 바꾸기전 데이터의 형태를 보관하기 위해 저장
 */
@Entity()
export class Video {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  path: string;

  @Column({ default: 'video/webm' })
  format: string;

  @Column({ default: 0 })
  size: number;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
