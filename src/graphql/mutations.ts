// tslint:disable
// this is an auto generated file. This will be overwritten

export const createTeam = `mutation CreateTeam($input: CreateTeamInput!) {
  createTeam(input: $input) {
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
export const updateTeam = `mutation UpdateTeam($input: UpdateTeamInput!) {
  updateTeam(input: $input) {
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
export const deleteTeam = `mutation DeleteTeam($input: DeleteTeamInput!) {
  deleteTeam(input: $input) {
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
export const createMember = `mutation CreateMember($input: CreateMemberInput!) {
  createMember(input: $input) {
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
export const updateMember = `mutation UpdateMember($input: UpdateMemberInput!) {
  updateMember(input: $input) {
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
export const deleteMember = `mutation DeleteMember($input: DeleteMemberInput!) {
  deleteMember(input: $input) {
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
export const createFeedback = `mutation CreateFeedback($input: CreateFeedbackInput!) {
  createFeedback(input: $input) {
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
export const updateFeedback = `mutation UpdateFeedback($input: UpdateFeedbackInput!) {
  updateFeedback(input: $input) {
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
export const deleteFeedback = `mutation DeleteFeedback($input: DeleteFeedbackInput!) {
  deleteFeedback(input: $input) {
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
