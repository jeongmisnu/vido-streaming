import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * 각종 오디오의 위치를 저장함
 * 다른 포멧의 형식의 오디오는 모두 wav로 바뀌기 전에 임시로 담겨있음
 */
@Entity()
export class Audio {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  path: string;

  @Column({ default: 'audio/wav' })
  format: string;

  @Column({ default: 0 })
  size: number;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
