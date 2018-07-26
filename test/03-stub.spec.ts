import { User, UserRepository, LoginService } from "../src/03-stub";
import { assert } from "chai";

describe("fake", () => {

    class StubUserRepository implements UserRepository {

        private _users: User[];

        constructor() {
            this._users = [
                new User("1", "anytao", "123"),
                new User("2", "terry", "456"),
                new User("3", "shaunxu", "789")
            ]
        }

        async getUserByName(name: string): Promise<User | undefined> {
            return this._users.find(u => u.name === name);
        }

    }

    it(`login with valid name and password, return user`, async () => {
        // arrange
        const repository = new StubUserRepository();
        const service = new LoginService(repository);
        const expect = new User("3", "shaunxu", "789");

        // action
        const actual = await service.login(expect.name, expect.password);

        // assert
        assert.deepStrictEqual(actual, expect);
    });

    it(`login with invalid name, return undefined`, async () => {
        // arrange
        const repository = new StubUserRepository();
        const service = new LoginService(repository);
        const expect = new User("3", "shaunxu", "789");

        // action
        const actual = await service.login("shaunxu123", expect.password);

        // assert
        assert.isUndefined(actual);
    });

    it(`login with valid name but invalid password, return undefined`, async () => {
        // arrange
        const repository = new StubUserRepository();
        const service = new LoginService(repository);
        const expect = new User("3", "shaunxu", "789");

        // action
        const actual = await service.login(expect.name, "abc");

        // assert
        assert.isUndefined(actual);
    });

});