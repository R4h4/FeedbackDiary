// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateTeam = `subscription OnCreateTeam($owner: String!) {
  onCreateTeam(owner: $owner) {
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
export const onUpdateTeam = `subscription OnUpdateTeam($owner: String!) {
  onUpdateTeam(owner: $owner) {
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
export const onDeleteTeam = `subscription OnDeleteTeam($owner: String!) {
  onDeleteTeam(owner: $owner) {
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
export const onCreateMember = `subscription OnCreateMember($owner: String!) {
  onCreateMember(owner: $owner) {
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
export const onUpdateMember = `subscription OnUpdateMember($owner: String!) {
  onUpdateMember(owner: $owner) {
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
export const onDeleteMember = `subscription OnDeleteMember($owner: String!) {
  onDeleteMember(owner: $owner) {
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
export const onCreateFeedback = `subscription OnCreateFeedback($owner: String!) {
  onCreateFeedback(owner: $owner) {
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
export const onUpdateFeedback = `subscription OnUpdateFeedback($owner: String!) {
  onUpdateFeedback(owner: $owner) {
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
export const onDeleteFeedback = `subscription OnDeleteFeedback($owner: String!) {
  onDeleteFeedback(owner: $owner) {
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
