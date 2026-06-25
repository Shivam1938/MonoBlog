import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            try {
                await this.account.create(ID.unique(), email, password, name);

                // call another method
                return await this.login({ email, password });
            } catch (error) {
                throw error;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {

            return await this.account.createEmailPasswordSession(email, password);

        } catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
            
        } catch (error) {
            console.log("Appwrite Service :: getCurrentUser :: error", error)
        }

        return null;
    }


}

const authService = new AuthService();

export default authService;
