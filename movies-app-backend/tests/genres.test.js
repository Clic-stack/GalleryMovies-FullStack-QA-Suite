import request from 'supertest'
import app from '../src/app.js'

let id

test('GET /genres - Obtener todos los generos', async () => {
    const res = await request(app).get('/api/genres')
    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
    console.log(res.body)
});

test('POST /genres - Crear un nuevo genero', async () => {
    const newGenre = { 
        name: 'Comedia'
    }
    const res = await request(app).post('/api/genres').send(newGenre)
    id = res.body.id
    expect(res.status).toBe(201)
    expect(res.body.name).toBe(newGenre.name)
    console.log('Body:', res.body)
})

test('PUT /genres/:id - Actualizar un genero', async () => {
    const updatedGenre = { 
        name: 'Drama'
    }
    const res = await request(app).put(`/api/genres/${id}`).send(updatedGenre)
    expect(res.status).toBe(200)
    expect(res.body.name).toBe(updatedGenre.name)
    console.log('Body:', res.body)
});

test('DELETE /genres/:id - Eliminar un genero por ID', async () => {
    const res = await request(app).delete(`/api/genres/${id}`)
    expect(res.status).toBe(204)
});