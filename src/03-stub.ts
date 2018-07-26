class User {

    constructor(
        public id: string,
        public name: string,
        public password: string
    ) {
    }

}

interface UserRepository {

    getUserByName(name: string): Promise<User | undefined>;

}

class LoginService {

    private _userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this._userRepository = userRepository;
    }

    async login(name: string, password: string): Promise<User | undefined> {
        const user = await this._userRepository.getUserByName(name);
        if (user && user.password === password) {
            return user;
        }
    }

}

export { User, UserRepository, LoginService };