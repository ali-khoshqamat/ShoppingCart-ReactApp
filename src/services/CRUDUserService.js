import http from "./httpService";

export function signupUser(formData) {
  // return http.post("/users/register", formData);
  return http.post("/register", formData);
}

export function loginUser(formData) {
  // return http.post("/users/register", formData);
  return http.post("/login", formData);
}

//

// export function getAllComments() {
//   return http.get("/comments");
// }

// export function getComment(id) {
//   return http.get(`/comments/${id}`);
// }

// export function postComment(bodyRequest) {
//   const token = "SECURE TOKEN!";
//   const header = {
//     headers: {
//       // Authorization: "SECURE TOKEN",
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   return http.post("/comments", bodyRequest, header);
// }

// export function putComment(id, bodyRequest) {
//   return http.put(`/comments/${id}`, bodyRequest);
// }

// export function deleteComment(id) {
//   return http.delete(`/comments/${id}`);
// }
