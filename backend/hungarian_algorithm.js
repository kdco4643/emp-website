import hungarian from 'hungarian-algorithm-js';

function create_compatibility_matrix(mentors, mentees) {
  // # Create a matrix with dimensions len(mentors) x len(mentees)
  //compatibility_matrix = empty_matrix(len(mentors), len(mentees))
  let compatibility_matrix = [];
  for (let i = 0; i < len(mentors); i++) {
    compatibility_matrix.push([]);
  }

  //# Fill in the matrix
    for (let i = 0; i < len(mentors); i++) {
      for (let j = 0; j < len(mentees); j++) {
        //# Calculate the compatibility score as the negative of the sum of absolute differences in rankings
        let score = 0
        for (let k = 0; k < len(mentors[i].rankings); k++) {
          score -= Math.abs(mentors[i].rankings[k] - mentees[j].rankings[k])
          compatibility_matrix[i][j] = score
        }
      }
    }
  return compatibility_matrix
}

function hungarian_algorithm(matrix){
  // Assume that this function applies the Hungarian algorithm on the given matrix
  // and returns the optimal assignment as a list of (row, col) pairs
  // This is usually available in scientific computing libraries.

  // Apply the Hungarian algorithm to find the optimal assignment
  const optimal_assignment = hungarian(matrix, true);

  return optimal_assignment
}

function match_mentors_mentees(mentors, mentees){
    compatibility_matrix = create_compatibility_matrix(mentors, mentees)
    assignment = hungarian_algorithm(compatibility_matrix);

    // Extract the final pairings
    let pairings = [];
    for ((i, j) in assignment) {
      pairings.append((mentors[i], mentees[j]))
    }
    return pairings
}

final_pairings = match_mentors_mentees(mentors, mentees);
console.log(final_pairings);

