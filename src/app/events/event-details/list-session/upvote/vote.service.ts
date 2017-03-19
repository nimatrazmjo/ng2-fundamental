import { Injectable } from '@angular/core';
import { AuthService } from "../../../../user/auth.service";
import {ISession} from "../../../event.model";

@Injectable()
export class VoteService {

  constructor(auth: AuthService) { }

  addVoter (session: ISession, voterName: string) {
    session.voters.push(voterName)
  }
  deleteVoter (session: ISession, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName)
  }
  userHasVoted (session : ISession, voterName : string) {
    return session.voters.some(voter => voter === voterName)
  }
}
