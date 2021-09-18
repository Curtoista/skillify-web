import { gql } from "@apollo/client";

export const CREATE_USER_ASSIGNMENT = gql`
  mutation insertUserAssignment(
    $user_id: String
    $assignment_id: String
    $user_solution: jsonb
    $user_images: jsonb
    $user_drawn_lines: jsonb
  ) {
    insert_user_assignments(
      objects: {
        assignment_id: $assignment_id
        user_id: $user_id
        user_solution: $user_solution
        user_images: $user_images
        user_drawn_lines: $user_drawn_lines
      }
    ) {
      returning {
        id
        user_solution
        user_images
        user_drawn_lines
      }
    }
  }
`;