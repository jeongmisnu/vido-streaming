import { EntityManager } from 'typeorm';

export class AuthService {
  constructor(private entity: EntityManager) {}

  /**
   * 유저 정보 찾기
   * 로그인 토큰 인증 정보 반환
   */
  async findUser(payload: { id: number }) {
    const result = {
      user: {},
      success: false,
    };
    try {
      result.user = this.entity.query(
        `select * form user where id=${payload.id}}`,
      );
    } catch (error) {
      console.log('Not find user:::', error);
    }

    return result;
  }
}
