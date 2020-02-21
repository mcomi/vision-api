const express = require("express");
const ProyectosService = require("../services/proyectos");

function projectsApi(app) {
  const router = express.Router();
  app.use("/api/proyectos", router);

  const proyectosService = new ProyectosService();

  router.get("/", async function(req, res, next) {
    try {
      const proyectos = await proyectosService.getProjects();

      res.status(200).json({
        data: proyectos,
        message: "lista de proyectos devuelta"
      });
    } catch (err) {
      next(err);
    }
  });

  router.get("/:projectId", async function(req, res, next) {
    const { projectId } = req.params;
    try {
      const proyecto = await proyectosService.getProject({ projectId });

      res.status(200).json({
        data: proyecto,
        message: "proyecto encontrado"
      });
    } catch (err) {
      next(err);
    }
  });

  router.post("/", async function(req, res, next) {
    const { body: project } = req;
    console.log(project);
    try {
      const createdProjectId = await proyectosService.createProject({
        project
      });

      res.status(200).json({
        data: createdProjectId,
        message: "proyecto creado"
      });
    } catch (err) {
      next(err);
    }
  });

  router.put("/:projectId", async function(req, res, next) {
    const { projectId } = req.params;
    const { body: project } = req;
    try {
      const updatedProjectId = await proyectosService.updateProject({
        projectId,
        project
      });

      res.status(200).json({
        data: updatedProjectId,
        message: "proyecto actualizado"
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = projectsApi;
