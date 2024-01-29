import { callApiService } from "../../dataSource/apiService"

export const BookService = {

    getBooksForHomePage: (query) => {
        // return callApiService('GET', `http://localhost:5000/api/books`)
        console.log("query", query);
        return callApiService.get(`http://localhost:5000/api/search${query}`)

    },


    getBookDetails: (id) => {
        // return callApiService('GET', `http://localhost:5000/api/books/${id}`)
        return callApiService.get(`http://localhost:5000/api/books/${id}`)

    },

    createBook: (data) => {
        // return callApiService('POST', `http://localhost:5000/api/books`)\
        return callApiService.post(`http://localhost:5000/api/books`, data, { "Content-Type": "application/json" })

    },

    updateBook: (id, data) => {
        return callApiService.patch(`http://localhost:5000/api/books/${id}`, data)
    },

    deleteBook: (id) => {
        return callApiService.delete(`http://localhost:5000/api/books/${id}`)
    },

    uploadCsvFile: (formData) => {
        return callApiService.post("http://localhost:5000/api/bulk-upload", formData, { "Content-Type": "multipart/form-data" })
    },

    getCSVUploads: () => {
        // return callApiService('GET', `http://localhost:5000/api/bulk-uploads-list`)
        return callApiService.get(`http://localhost:5000/api/bulk-uploads-list`)

    },

    getCSVUploadErrors: (id) => {
        // return callApiService('GET', `http://localhost:5000/api/bulk-uploads-errors/${id}`)
        return callApiService.get(`http://localhost:5000/api/bulk-uploads-errors/${id}`)

    },

    userLogin: (data) => {
        return callApiService.post("http://localhost:5000/users/login", data, { "Content-Type": "application/json" })
    }

}