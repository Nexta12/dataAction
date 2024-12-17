export const endpoints = {
  login: "api/secure/login",
  logout: "api/secure/logout",
  bookConsultation: "/api/consultation/book-consultation",
  getConsultationById: "/api/consultation",
  applyForTraining: "/api/training/apply",
  sendContactMessage: "/api/contact/create",
  validateAuth: "/api/secure/validate",
  getAllUsers: "/api/user/getAll",
  addNewStaff: "/api/secure/addUser",
  getUser: "/api/user/getOne",
  updateUser: "/api/user/update",
  deleteUser: "/api/user/delete",
  addNewService: "/api/service/create",
  getAllServices: "/api/service/all",
  getOnlyServices: "/api/service/servicesOnly",
  getOnlyCourses: "/api/service/coursesOnly",
  getOneServiceById: "/api/service/getOne",
  updateService: "/api/service/update",
  deleteService: "/api/service/delete",
  getAllCourses: "/api/course/getAll",
  getOneCourseBySlug: "/api/course",
  addNewCourse: "/api/course/create",
  deleteCourse: "/api/course/delete",
  downloadOutline: "/api/course/download"
};
