import express from "express";
import BaseController from "../utils/BaseController";
import { notesService } from "../services/NotesService";
import auth0Provider from "@bcwdev/auth0provider";

export class NotesController extends BaseController {
  constructor() {
    super("api/notes");
    this.router
      .get("", this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(auth0Provider.getAuthorizedUserInfo)
      .post("", this.create)
      .delete("/:_id", this.delete);
  }
  async getAll(req, res, next) {
    try {
      return res.send();
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorEmail = req.userInfo.email;
      await notesService.create(req.body);
      res.send("Bug successfully submitted.");
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await notesService.deleteById(req.params.id));
    } catch (error) {
      console.error(error);
    }
  }
}
