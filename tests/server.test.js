const request = require("supertest");
const app = require("../src/server");

describe("nodejs api test",()=>{
    test("home api",async()=>{
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("success");

    });
        test("Health API should work", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("healthy");
    });

    test("Users API should return 3 users", async () => {
        const response = await request(app).get("/api/users");

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(3);
    });
});