/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateTeamInput = {
  id?: string | null,
  description?: string | null,
  created_at?: string | null,
  updated_at?: string | null,
};

export type UpdateTeamInput = {
  id: string,
  description?: string | null,
  created_at?: string | null,
  updated_at?: string | null,
};

export type DeleteTeamInput = {
  id?: string | null,
};

export type CreateMemberInput = {
  id?: string | null,
  name: string,
  position?: string | null,
  created_at?: string | null,
  updated_at?: string | null,
  memberTeamId?: string | null,
};

export type UpdateMemberInput = {
  id: string,
  name?: string | null,
  position?: string | null,
  created_at?: string | null,
  updated_at?: string | null,
  memberTeamId?: string | null,
};

export type DeleteMemberInput = {
  id?: string | null,
};

export type CreateFeedbackInput = {
  id?: string | null,
  created_at?: string | null,
  updated_at?: string | null,
  feedbackMemberId?: string | null,
};

export type UpdateFeedbackInput = {
  id: string,
  created_at?: string | null,
  updated_at?: string | null,
  feedbackMemberId?: string | null,
};

export type DeleteFeedbackInput = {
  id?: string | null,
};

export type ModelTeamFilterInput = {
  id?: ModelIDFilterInput | null,
  description?: ModelStringFilterInput | null,
  created_at?: ModelStringFilterInput | null,
  updated_at?: ModelStringFilterInput | null,
  and?: Array< ModelTeamFilterInput | null > | null,
  or?: Array< ModelTeamFilterInput | null > | null,
  not?: ModelTeamFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelMemberFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  position?: ModelStringFilterInput | null,
  created_at?: ModelStringFilterInput | null,
  updated_at?: ModelStringFilterInput | null,
  and?: Array< ModelMemberFilterInput | null > | null,
  or?: Array< ModelMemberFilterInput | null > | null,
  not?: ModelMemberFilterInput | null,
};

export type ModelFeedbackFilterInput = {
  id?: ModelIDFilterInput | null,
  created_at?: ModelStringFilterInput | null,
  updated_at?: ModelStringFilterInput | null,
  and?: Array< ModelFeedbackFilterInput | null > | null,
  or?: Array< ModelFeedbackFilterInput | null > | null,
  not?: ModelFeedbackFilterInput | null,
};

export type CreateTeamMutationVariables = {
  input: CreateTeamInput,
};

export type CreateTeamMutation = {
  createTeam:  {
    __typename: "Team",
    id: string,
    description: string | null,
    members:  {
      __typename: "ModelMemberConnection",
      items:  Array< {
        __typename: "Member",
        id: string,
        name: string,
        position: string | null,
        created_at: string | null,
        updated_at: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    created_at: string | null,
    updated_at: string | null,
    owner: string | null,
  } | null,
};

export type UpdateTeamMutationVariables = {
  input: UpdateTeamInput,
};

export type UpdateTeamMutation = {
  updateTeam:  {
    __typename: "Team",
    id: string,
    description: string | null,
    members:  {
      __typename: "ModelMemberConnection",
      items:  Array< {
        __typename: "Member",
        id: string,
        name: string,
        position: string | null,
        created_at: string | null,
        updated_at: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    created_at: string | null,
    updated_at: string | null,
    owner: string | null,
  } | null,
};

export type DeleteTeamMutationVariables = {
  input: DeleteTeamInput,
};

export type DeleteTeamMutation = {
  deleteTeam:  {
    __typename: "Team",
    id: string,
    description: string | null,
    members:  {
      __typename: "ModelMemberConnection",
      items:  Array< {
        __typename: "Member",
        id: string,
        name: string,
        position: string | null,
        created_at: string | null,
        updated_at: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    created_at: string | null,
    updated_at: string | null,
    owner: string | null,
  } | null,
};

export type CreateMemberMutationVariables = {
  input: CreateMemberInput,
};

export type CreateMemberMutation = {
  createMember:  {
    __typename: "Member",
    id: string,
    name: string,
    position: string | null,
    team:  {
      __typename: "Team",
      id: string,
      description: string | null,
      members:  {
        __typename: "ModelMemberConnection",
        nextToken: string | null,
      } | null,
      created_at: string | null,
      updated_at: string | null,
      owner: string | null,
    } | null,
    feedback:  {
      __typename: "ModelFeedbackConnection",
      items:  Array< {
        __typename: "Feedback",
        id: string,
        created_at: string | null,
        updated_at: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    created_at: string | null,
    updated_at: string | null,
    owner: string | null,
  } | null,
};

export type UpdateMemberMutationVariables = {
  input: UpdateMemberInput,
};

export type UpdateMemberMutation = {
  updateMember:  {
    __typename: "Member",
    id: string,
    name: string,
    position: string | null,
    team:  {
      __typename: "Team",
      id: string,
      description: string | null,
      members:  {
        __typename: "ModelMemberConnection",
        nextToken: string | null,
      } | null,
      created_at: string | null,
      updated_at: string | null,
      owner: string | null,
    } | null,
    feedback:  {
      __typename: "ModelFeedbackConnection",
      items:  Array< {
        __typename: "Feedback",
        id: string,
        created_at: string | null,
        updated_at: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    created_at: string | null,
    updated_at: string | null,
    owner: string | null,
  } | null,
};

export type DeleteMemberMutationVariables = {
  input: DeleteMemberInput,
};

export type DeleteMemberMutation = {
  deleteMember:  {
    __typename: "Member",
    id: string,
    name: string,
    position: string | null,
    team:  {
      __typename: "Team",
      id: string,
      description: string | null,
      members:  {
        __typename: "ModelMemberConnection",
        nextToken: string | null,
      } | null,
      created_at: string | null,
      updated_at: string | null,
      owner: string | null,
    } | null,
    feedback:  {
      __typename: "ModelFeedbackConnection",
      items:  Array< {
        __typename: "Feedback",
        id: string,
        created_at: string | null,
        updated_at: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    created_at: string | null,
    updated_at: string | null,
    owner: string | null,
  } | null,
};

export type CreateFeedbackMutationVariables = {
  input: CreateFeedbackInput,
};

export type CreateFeedbackMutation = {
  createFeedback:  {
    __typename: "Feedback",
    id: string,
    member:  {
      __typename: "Member",
      id: string,
      name: string,
      position: string | null,
      team:  {
        __typename: "Team",
        id: string,
        description: string | null,
        created_at: string | null,
        updated_at: string | null,
        owner: string | null,
      } | null,
      feedback:  {
        __typename: "ModelFeedbackConnection",
        nextToken: string | null,
      } | null,
      created_at: string | null,
      updated_at: string | null,
      owner: string | null,
    } | null,
    created_at: string | null,
    updated_at: string | null,
    owner: string | null,
  } | null,
};

export type UpdateFeedbackMutationVariables = {
  input: UpdateFeedbackInput,
};

export type UpdateFeedbackMutation = {
  updateFeedback:  {
    __typename: "Feedback",
    id: string,
    member:  {
      __typename: "Member",
      id: string,
      name: string,
      position: string | null,
      team:  {
        __typename: "Team",
        id: string,
        description: string | null,
        created_at: string | null,
        updated_at: string | null,
        owner: string | null,
      } | null,
      feedback:  {
        __typename: "ModelFeedbackConnection",
        nextToken: string | null,
      } | null,
      created_at: string | null,
      updated_at: string | null,
      owner: string | null,
    } | null,
    created_at: string | null,
    updated_at: string | null,
    owner: string | null,
  } | null,
};

export type DeleteFeedbackMutationVariables = {
  input: DeleteFeedbackInput,
};

export type DeleteFeedbackMutation = {
  deleteFeedback:  {
    __typename: "Feedback",
    id: string,
    member:  {
      __typename: "Member",
      id: string,
      name: string,
      position: string | null,
      team:  {
        __typename: "Team",
        id: string,
        description: string | null,
        created_at: string | null,
        updated_at: string | null,
        owner: string | null,
      } | null,
      feedback:  {
        __typename: "ModelFeedbackConnection",
        nextToken: string | null,
      } | null,
      created_at: string | null,
      updated_at: string | null,
      owner: string | null,
    } | null,
    created_at: string | null,
    updated_at: string | null,
    owner: string | null,
  } | null,
};

export type GetTeamQueryVariables = {
  id: string,
};

export type GetTeamQuery = {
  getTeam:  {
    __typename: "Team",
    id: string,
    description: string | null,
    members:  {
      __typename: "ModelMemberConnection",
      items:  Array< {
        __typename: "Member",
        id: string,
        name: string,
        position: string | null,
        created_at: string | null,
        updated_at: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    created_at: string | null,
    updated_at: string | null,
    owner: string | null,
  } | null,
};

export type ListTeamsQueryVariables = {
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamsQuery = {
  listTeams:  {
    __typename: "ModelTeamConnection",
    items:  Array< {
      __typename: "Team",
      id: string,
      description: string | null,
      members:  {
        __typename: "ModelMemberConnection",
        nextToken: string | null,
      } | null,
      created_at: string | null,
      updated_at: string | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMemberQueryVariables = {
  id: string,
};

export type GetMemberQuery = {
  getMember:  {
    __typename: "Member",
    id: string,
    name: string,
    position: string | null,
    team:  {
      __typename: "Team",
      id: string,
      description: string | null,
      members:  {
        __typename: "ModelMemberConnection",
        nextToken: string | null,
      } | null,
      created_at: string | null,
      updated_at: string | null,
      owner: string | null,
    } | null,
    feedback:  {
      __typename: "ModelFeedbackConnection",
      items:  Array< {
        __typename: "Feedback",
        id: string,
        created_at: string | null,
        updated_at: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    created_at: string | null,
    updated_at: string | null,
    owner: string | null,
  } | null,
};

export type ListMembersQueryVariables = {
  filter?: ModelMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembersQuery = {
  listMembers:  {
    __typename: "ModelMemberConnection",
    items:  Array< {
      __typename: "Member",
      id: string,
      name: string,
      position: string | null,
      team:  {
        __typename: "Team",
        id: string,
        description: string | null,
        created_at: string | null,
        updated_at: string | null,
        owner: string | null,
      } | null,
      feedback:  {
        __typename: "ModelFeedbackConnection",
        nextToken: string | null,
      } | null,
      created_at: string | null,
      updated_at: string | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetFeedbackQueryVariables = {
  id: string,
};

export type GetFeedbackQuery = {
  getFeedback:  {
    __typename: "Feedback",
    id: string,
    member:  {
      __typename: "Member",
      id: string,
      name: string,
      position: string | null,
      team:  {
        __typename: "Team",
        id: string,
        description: string | null,
        created_at: string | null,
        updated_at: string | null,
        owner: string | null,
      } | null,
      feedback:  {
        __typename: "ModelFeedbackConnection",
        nextToken: string | null,
      } | null,
      created_at: string | null,
      updated_at: string | null,
      owner: string | null,
    } | null,
    created_at: string | null,
    updated_at: string | null,
    owner: string | null,
  } | null,
};

export type ListFeedbacksQueryVariables = {
  filter?: ModelFeedbackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeedbacksQuery = {
  listFeedbacks:  {
    __typename: "ModelFeedbackConnection",
    items:  Array< {
      __typename: "Feedback",
      id: string,
      member:  {
        __typename: "Member",
        id: string,
        name: string,
        position: string | null,
        created_at: string | null,
        updated_at: string | null,
        owner: string | null,
      } | null,
      created_at: string | null,
      updated_at: string | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateTeamSubscriptionVariables = {
  owner: string,
};

export type OnCreateTeamSubscription = {
  onCreateTeam:  {
    __typename: "Team",
    id: string,
    description: string | null,
    members:  {
      __typename: "ModelMemberConnection",
      items:  Array< {
        __typename: "Member",
        id: string,
        name: string,
        position: string | null,
        created_at: string | null,
        updated_at: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    created_at: string | null,
    updated_at: string | null,
    owner: string | null,
  } | null,
};

export type OnUpdateTeamSubscriptionVariables = {
  owner: string,
};

export type OnUpdateTeamSubscription = {
  onUpdateTeam:  {
    __typename: "Team",
    id: string,
    description: string | null,
    members:  {
      __typename: "ModelMemberConnection",
      items:  Array< {
        __typename: "Member",
        id: string,
        name: string,
        position: string | null,
        created_at: string | null,
        updated_at: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    created_at: string | null,
    updated_at: string | null,
    owner: string | null,
  } | null,
};

export type OnDeleteTeamSubscriptionVariables = {
  owner: string,
};

export type OnDeleteTeamSubscription = {
  onDeleteTeam:  {
    __typename: "Team",
    id: string,
    description: string | null,
    members:  {
      __typename: "ModelMemberConnection",
      items:  Array< {
        __typename: "Member",
        id: string,
        name: string,
        position: string | null,
        created_at: string | null,
        updated_at: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    created_at: string | null,
    updated_at: string | null,
    owner: string | null,
  } | null,
};

export type OnCreateMemberSubscriptionVariables = {
  owner: string,
};

export type OnCreateMemberSubscription = {
  onCreateMember:  {
    __typename: "Member",
    id: string,
    name: string,
    position: string | null,
    team:  {
      __typename: "Team",
      id: string,
      description: string | null,
      members:  {
        __typename: "ModelMemberConnection",
        nextToken: string | null,
      } | null,
      created_at: string | null,
      updated_at: string | null,
      owner: string | null,
    } | null,
    feedback:  {
      __typename: "ModelFeedbackConnection",
      items:  Array< {
        __typename: "Feedback",
        id: string,
        created_at: string | null,
        updated_at: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    created_at: string | null,
    updated_at: string | null,
    owner: string | null,
  } | null,
};

export type OnUpdateMemberSubscriptionVariables = {
  owner: string,
};

export type OnUpdateMemberSubscription = {
  onUpdateMember:  {
    __typename: "Member",
    id: string,
    name: string,
    position: string | null,
    team:  {
      __typename: "Team",
      id: string,
      description: string | null,
      members:  {
        __typename: "ModelMemberConnection",
        nextToken: string | null,
      } | null,
      created_at: string | null,
      updated_at: string | null,
      owner: string | null,
    } | null,
    feedback:  {
      __typename: "ModelFeedbackConnection",
      items:  Array< {
        __typename: "Feedback",
        id: string,
        created_at: string | null,
        updated_at: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    created_at: string | null,
    updated_at: string | null,
    owner: string | null,
  } | null,
};

export type OnDeleteMemberSubscriptionVariables = {
  owner: string,
};

export type OnDeleteMemberSubscription = {
  onDeleteMember:  {
    __typename: "Member",
    id: string,
    name: string,
    position: string | null,
    team:  {
      __typename: "Team",
      id: string,
      description: string | null,
      members:  {
        __typename: "ModelMemberConnection",
        nextToken: string | null,
      } | null,
      created_at: string | null,
      updated_at: string | null,
      owner: string | null,
    } | null,
    feedback:  {
      __typename: "ModelFeedbackConnection",
      items:  Array< {
        __typename: "Feedback",
        id: string,
        created_at: string | null,
        updated_at: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    created_at: string | null,
    updated_at: string | null,
    owner: string | null,
  } | null,
};

export type OnCreateFeedbackSubscriptionVariables = {
  owner: string,
};

export type OnCreateFeedbackSubscription = {
  onCreateFeedback:  {
    __typename: "Feedback",
    id: string,
    member:  {
      __typename: "Member",
      id: string,
      name: string,
      position: string | null,
      team:  {
        __typename: "Team",
        id: string,
        description: string | null,
        created_at: string | null,
        updated_at: string | null,
        owner: string | null,
      } | null,
      feedback:  {
        __typename: "ModelFeedbackConnection",
        nextToken: string | null,
      } | null,
      created_at: string | null,
      updated_at: string | null,
      owner: string | null,
    } | null,
    created_at: string | null,
    updated_at: string | null,
    owner: string | null,
  } | null,
};

export type OnUpdateFeedbackSubscriptionVariables = {
  owner: string,
};

export type OnUpdateFeedbackSubscription = {
  onUpdateFeedback:  {
    __typename: "Feedback",
    id: string,
    member:  {
      __typename: "Member",
      id: string,
      name: string,
      position: string | null,
      team:  {
        __typename: "Team",
        id: string,
        description: string | null,
        created_at: string | null,
        updated_at: string | null,
        owner: string | null,
      } | null,
      feedback:  {
        __typename: "ModelFeedbackConnection",
        nextToken: string | null,
      } | null,
      created_at: string | null,
      updated_at: string | null,
      owner: string | null,
    } | null,
    created_at: string | null,
    updated_at: string | null,
    owner: string | null,
  } | null,
};

export type OnDeleteFeedbackSubscriptionVariables = {
  owner: string,
};

export type OnDeleteFeedbackSubscription = {
  onDeleteFeedback:  {
    __typename: "Feedback",
    id: string,
    member:  {
      __typename: "Member",
      id: string,
      name: string,
      position: string | null,
      team:  {
        __typename: "Team",
        id: string,
        description: string | null,
        created_at: string | null,
        updated_at: string | null,
        owner: string | null,
      } | null,
      feedback:  {
        __typename: "ModelFeedbackConnection",
        nextToken: string | null,
      } | null,
      created_at: string | null,
      updated_at: string | null,
      owner: string | null,
    } | null,
    created_at: string | null,
    updated_at: string | null,
    owner: string | null,
  } | null,
};
