import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true,
});

export default new Vuex.Store({
  state: {
    bugs: [],
    profile: {},
    activeBug: {},
    notes: [],
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBugs(state, bugs) {
      state.bugs = bugs;
    },
    setActiveBug(state, activeBug) {
      state.activeBug = activeBug;
    },

    setNotes(state, notes) {
      state.notes = notes;
    },
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async getBugs({ commit }) {
      try {
        let res = await api.get("bugs");
        commit("setBugs", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getBug({ commit }, bugId) {
      try {
        let res = await api.get("bugs/" + bugId);
        console.log("getBug: ", bugId, res.data);
        commit("setActiveBug", res.data);
        console.log("getBug res: ", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async addBug({ commit, dispatch }, newBug) {
      try {
        let res = await api.post("bugs", newBug);
        dispatch("getBugs", newBug.id);
      } catch (error) {
        console.error(error);
      }
    },
    // async closeBug({ commit, dispatch }, bugId) {
    //   try {
    //     let res = await api.put("bugs/" + bugId, bugId:{ closed: true });
    //     dispatch("getBugs");
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },

    async addNote({ commit, dispatch }, newNote) {
      try {
        let res = await api.post("notes", newNote);
        dispatch("getNotesByBugId", newNote.bug);
        // dispatch("getNotesByBugId");
      } catch (error) {
        console.error(error);
      }
    },
    async getNotesByBugId({ commit, dispatch }, bugId) {
      try {
        let res = await api.get("bugs/" + bugId + "/notes");
        commit("setNotes", res.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
