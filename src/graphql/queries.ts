// tslint:disable
// this is an auto generated file. This will be overwritten

export const getTeam = `query GetTeam($id: ID!) {
  getTeam(id: $id) {
    id
    description
    members {
      items {
        id
        name
        position
        created_at
        updated_at
        owner
      }
      nextToken
    }
    created_at
    updated_at
    owner
  }
}
`;
export const listTeams = `query ListTeams(
  $filter: ModelTeamFilterInput
  $limit: Int
  $nextToken: String
) {
  listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      members {
        nextToken
      }
      created_at
      updated_at
      owner
    }
    nextToken
  }
}
`;
export const getMember = `query GetMember($id: ID!) {
  getMember(id: $id) {
    id
    name
    position
    team {
      id
      description
      members {
        nextToken
      }
      created_at
      updated_at
      owner
    }
    feedback {
      items {
        id
        created_at
        updated_at
        owner
      }
      nextToken
    }
    created_at
    updated_at
    owner
  }
}
`;
export const listMembers = `query ListMembers(
  $filter: ModelMemberFilterInput
  $limit: Int
  $nextToken: String
) {
  listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      position
      team {
        id
        description
        created_at
        updated_at
        owner
      }
      feedback {
        nextToken
      }
      created_at
      updated_at
      owner
    }
    nextToken
  }
}
`;
export const getFeedback = `query GetFeedback($id: ID!) {
  getFeedback(id: $id) {
    id
    member {
      id
      name
      position
      team {
        id
        description
        created_at
        updated_at
        owner
      }
      feedback {
        nextToken
      }
      created_at
      updated_at
      owner
    }
    created_at
    updated_at
    owner
  }
}
`;
export const listFeedbacks = `query ListFeedbacks(
  $filter: ModelFeedbackFilterInput
  $limit: Int
  $nextToken: String
) {
  listFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      member {
        id
        name
        position
        created_at
        updated_at
        owner
      }
      created_at
      updated_at
      owner
    }
    nextToken
  }
}
`;
