const request = require("supertest")

const app = require("./app")

let elementId

describe("Test example", () => {
    test("GET /categories", async () => {
        const res = await request(app)
            .get("/categories")

        expect(res.headers["content-type"]).toMatch(/json/i)
        expect(res.status).toEqual(200)
        expect(res.body.length).toBe(4)
        expect(res.body[0].name).toEqual("Food")
    })

    test("POST /entries", async () => {
        const res = await request(app)
            .post("/entries")
            .send({
                cat_id: 1,
                content: 'Test Entry'
            })

        expect(res.headers["content-type"]).toMatch(/json/i)
        expect(res.status).toBe(200)
        expect(res.body.id).toBeTruthy()
        expect(res.body.category_id).toBe('1')
        expect(res.body.content).toBe('Test Entry')
    })
})
