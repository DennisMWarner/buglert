import express from "express";
import BaseController from "../utils/BaseController";
import { valuesService } from "../services/ValuesService";
import auth0Provider from "@bcwdev/auth0provider";
import { bugsService } from "../services/BugsService";
import { notesService } from "../services/NotesService";

export class BugsController extends BaseController {
  constructor() {
    super("api/bugs");
    this.router
      .get("", this.getAll)
      .get("/open", this.getOpen)
      .get("/closed", this.getClosed)
      .get("/:id", this.getById)
      .get("/:id/notes", this.getNotesByBugId)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(auth0Provider.getAuthorizedUserInfo)
      .get("/user/:id", this.getByUserId)
      .put("/:id", this.edit)
      .post("", this.create);
  }
  async getAll(req, res, next) {
    try {
      res.send(await bugsService.findAll());
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      res.send(await bugsService.findById(req.params.id));
    } catch (error) {
      next(error);
    }
  }

  async getNotesByBugId(req, res, next) {
    try {
      res.send(await notesService.findByBugId(req.params.id));
    } catch (error) {
      next(error);
    }
  }
  async getOpen(req, res, next) {
    try {
      res.send(await bugsService.findAll({ closed: false }));
    } catch (error) {
      next(error);
    }
  }
  async getClosed(req, res, next) {
    try {
      res.send(await bugsService.findAll({ closed: true }));
    } catch (error) {
      next(error);
    }
  }
  async getByUserId(req, res, next) {
    try {
      res.send(await bugsService.findAll({ creatorEmail: req.params.id }));
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorEmail = req.userInfo.email;
      await bugsService.create(req.body);
      res.send("Bug successfully submitted.");
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      res.send(await bugsService.findByIdAndEdit(req.params.id, req.body));
    } catch (error) {
      next(error);
    }
  }
}
