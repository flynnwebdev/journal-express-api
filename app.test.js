const request = require("supertest")
const app = require('./app')

describe("App Tests", () => {
    test("GET /", async () => {
        const res = await request(app).get("/")

        expect(res.status).toBe(200)
        expect(res.body.info).toMatch(/journal/i)
    })

    test("GET /categories", async () => {
        const res = await request(app).get("/categories")
        const expected = [/food/i, /coding/i, /other/i, /movies/i]

        expect(res.status).toBe(200)
        expect(res.headers["content-type"]).toMatch(/json/i)
        expect(res.body.length).toBe(4)
        res.body.forEach((cat, index) => {
            expect(cat.name).toMatch(expected[index])
        })
    })

    test("POST /entries", async () => {
        const res = await request(app)
            .post("/entries")
            .send({
                cat_id: 1,
                content: 'Test Entry'
            })

        expect(res.status).toBe(200)
        expect(res.headers["content-type"]).toMatch(/json/i)
        expect(res.body.id).toBeTruthy()
        expect(res.body.content).toBe('Test Entry')
        expect(res.body.category_id).toBe('1')
    })
})