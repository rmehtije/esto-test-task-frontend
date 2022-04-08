import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
// import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { UserType, LoginInputType } from './types';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {
  public user: UserType;
  public token: string;

  public getUser = (token: string) => {

    return this.apollo.query<any, any>({
        query: gql`query {
          user{
            name,
            email,
            creditcard {
              credit_card
            }
          }
      }`, 
      context: {
        headers: {
          "Authorization": `Bearer ${token}`
        } 
      },
    });
    
  }
  
  public login = (credentials: LoginInputType) => {
    
    const { email, password }: LoginInputType = credentials;

    return this.apollo.mutate<any, any>({
      mutation: gql`mutation($email: String!, $password: String!){
        login(email: $email, password: $password){
          token
        }
      }`,
      variables: {email: email, password: password}
    });
  }
  constructor(private apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: 'http://localhost:8888/graphql' }),
      cache: new InMemoryCache()
    })
  }
}
