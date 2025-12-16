import { Question, Section } from './types';

export const SECTIONS: Section[] = [
  {
    id: 'part1',
    title: 'PART 1: TENSES & BASIC STRUCTURES',
    topics: [
      { id: 'present_simple', title: '1. Present Simple', sectionId: 'part1', description: 'Chia động từ trong ngoặc (Hiện tại đơn)' },
      { id: 'present_cont', title: '2. Present Continuous', sectionId: 'part1', description: 'Chia động từ trong ngoặc (Hiện tại tiếp diễn)' },
      { id: 'present_perfect', title: '3. Present Perfect', sectionId: 'part1', description: 'Chia động từ trong ngoặc (Hiện tại hoàn thành)' },
      { id: 'past_simple', title: '4. Past Simple', sectionId: 'part1', description: 'Chia động từ trong ngoặc (Quá khứ đơn)' },
      { id: 'past_cont', title: '5. Past Continuous', sectionId: 'part1', description: 'Chia động từ trong ngoặc (Quá khứ tiếp diễn)' },
      { id: 'future_simple', title: '6. Future Simple', sectionId: 'part1', description: 'Chia động từ trong ngoặc (Tương lai đơn)' },
      { id: 'used_to', title: '7. Used to', sectionId: 'part1', description: 'Viết lại câu hoặc chia động từ' },
      { id: 'tag_questions', title: '8. Tag Questions', sectionId: 'part1', description: 'Hoàn thành câu hỏi đuôi' },
    ]
  },
  {
    id: 'part2',
    title: 'PART 2: ADVANCED STRUCTURES',
    topics: [
      { id: 'passive_voice', title: '9. Passive Voice', sectionId: 'part2', description: 'Chuyển sang câu bị động' },
      { id: 'reported_speech', title: '10. Reported Speech', sectionId: 'part2', description: 'Chuyển sang câu gián tiếp' },
      { id: 'cond_type1', title: '11. Conditional Type 1', sectionId: 'part2', description: 'Chia động từ (Câu điều kiện loại 1)' },
      { id: 'cond_type2', title: '12. Conditional Type 2', sectionId: 'part2', description: 'Chia động từ (Câu điều kiện loại 2)' },
      { id: 'relative_clauses', title: '13. Relative Clauses', sectionId: 'part2', description: 'Nối câu dùng đại từ quan hệ' },
      { id: 'comparisons', title: '14. Comparisons', sectionId: 'part2', description: 'Chia dạng đúng của tính từ' },
      { id: 'so_such', title: '15. So...that / Such...that', sectionId: 'part2', description: 'Viết lại câu' },
      { id: 'too_enough', title: '16. Too...to / Enough...to', sectionId: 'part2', description: 'Viết lại câu' },
      { id: 'suggest', title: '17. Suggest', sectionId: 'part2', description: 'Viết lại câu hoặc chia động từ' },
      { id: 'prefer', title: '18. Prefer / Would rather', sectionId: 'part2', description: 'Chọn đáp án hoặc chia động từ' },
      { id: 'it_takes', title: '19. It takes...', sectionId: 'part2', description: 'Viết lại câu' },
    ]
  },
  {
    id: 'part3',
    title: 'PART 3: S-V AGREEMENT & GERUNDS',
    topics: [
      { id: 'sv_and', title: '20. S-V Agreement: And/Each', sectionId: 'part3', description: 'Chia động từ' },
      { id: 'sv_number', title: '21. S-V Agreement: Number of', sectionId: 'part3', description: 'Chia động từ' },
      { id: 'sv_there', title: '22. S-V Agreement: There/Indefinite', sectionId: 'part3', description: 'Chia động từ' },
      { id: 'sv_either', title: '23. S-V Agreement: Either/Neither', sectionId: 'part3', description: 'Chia động từ' },
      { id: 'gerunds', title: '24. Gerunds after Verbs', sectionId: 'part3', description: 'Chia động từ (V-ing)' },
      { id: 'to_infinitive', title: '25. To-Infinitive', sectionId: 'part3', description: 'Chia động từ (To V)' },
      { id: 'prepositions', title: '26. Prepositions & Phrasal', sectionId: 'part3', description: 'Chia động từ' },
      { id: 'modals', title: '27. Modal Verbs', sectionId: 'part3', description: 'Chọn từ đúng hoặc viết lại câu' },
      { id: 'wish', title: '28. Wish', sectionId: 'part3', description: 'Chia động từ' },
      { id: 'ving_subject', title: '29. V-ing as Subject', sectionId: 'part3', description: 'Chia động từ hoặc viết câu' },
      { id: 'be_going_to', title: '30. Be going to', sectionId: 'part3', description: 'Chia động từ' },
    ]
  }
];

export const QUESTIONS: Question[] = [
  // 1. Present Simple
  { id: 1, topicId: 'present_simple', text: 'The sun (set) ______ in the West.' },
  { id: 2, topicId: 'present_simple', text: 'She usually (walk) ______ to school, but today she is riding her bike.' },
  { id: 3, topicId: 'present_simple', text: 'Water (boil) ______ at 100 degrees Celsius.' },
  { id: 4, topicId: 'present_simple', text: 'My father (not/drink) ______ coffee in the evening.' },
  { id: 5, topicId: 'present_simple', text: 'What time ______ the train (leave) ______?' },

  // 2. Present Continuous
  { id: 6, topicId: 'present_cont', text: 'Look! The bus (come) ______.' },
  { id: 7, topicId: 'present_cont', text: 'Please be quiet. The baby (sleep) ______.' },
  { id: 8, topicId: 'present_cont', text: 'I (read) ______ a very interesting book at the moment.' },
  { id: 9, topicId: 'present_cont', text: 'They (not/play) ______ football right now; they are studying.' },
  { id: 10, topicId: 'present_cont', text: '______ you (listen) ______ to music?' },

  // 3. Present Perfect
  { id: 11, topicId: 'present_perfect', text: 'I (study) ______ English for 5 years.' },
  { id: 12, topicId: 'present_perfect', text: 'She (just/finish) ______ her homework.' },
  { id: 13, topicId: 'present_perfect', text: 'We (never/be) ______ to Paris before.' },
  { id: 14, topicId: 'present_perfect', text: '______ you (see) ______ that movie yet?' },
  { id: 15, topicId: 'present_perfect', text: 'He (lose) ______ his keys, so he can\'t get into the house.' },

  // 4. Past Simple
  { id: 16, topicId: 'past_simple', text: 'We (go) ______ to the cinema last night.' },
  { id: 17, topicId: 'past_simple', text: 'I (not/meet) ______ him yesterday.' },
  { id: 18, topicId: 'past_simple', text: 'When ______ you (buy) ______ this car?' },
  { id: 19, topicId: 'past_simple', text: 'She (be) ______ very tired after the trip.' },
  { id: 20, topicId: 'past_simple', text: 'Shakespeare (write) ______ Romeo and Juliet.' },

  // 5. Past Continuous
  { id: 21, topicId: 'past_cont', text: 'At 8 PM last night, I (watch) ______ TV.' },
  { id: 22, topicId: 'past_cont', text: 'While we (have) ______ dinner, the phone rang.' },
  { id: 23, topicId: 'past_cont', text: 'It (rain) ______ heavily when I got up this morning.' },
  { id: 24, topicId: 'past_cont', text: 'What ______ you (do) ______ at this time yesterday?' },
  { id: 25, topicId: 'past_cont', text: 'He (drive) ______ too fast when the accident happened.' },

  // 6. Future Simple
  { id: 26, topicId: 'future_simple', text: 'I think it (rain) ______ tomorrow.' },
  { id: 27, topicId: 'future_simple', text: 'I promise I (help) ______ you with your homework.' },
  { id: 28, topicId: 'future_simple', text: 'Maybe she (not/come) ______ to the party.' },
  { id: 29, topicId: 'future_simple', text: 'If you don\'t hurry, you (miss) ______ the bus.' },
  { id: 30, topicId: 'future_simple', text: '______ you (open) ______ the door for me, please?' },

  // 7. Used to
  { id: 31, topicId: 'used_to', text: 'I (smoke) ______ a lot, but I gave it up last year.' },
  { id: 32, topicId: 'used_to', text: 'Did you (use to) ______ play with dolls when you were small?' },
  { id: 33, topicId: 'used_to', text: 'There (use to) ______ be a cinema here.' },
  { id: 34, topicId: 'used_to', text: 'Rewrite: He often played football when he was young. -> He used to __________.' },
  { id: 35, topicId: 'used_to', text: 'Rewrite: She doesn\'t have long hair anymore. -> She used to __________.' },

  // 8. Tag Questions
  { id: 36, topicId: 'tag_questions', text: 'You are a student, ______?' },
  { id: 37, topicId: 'tag_questions', text: 'She doesn\'t like spicy food, ______?' },
  { id: 38, topicId: 'tag_questions', text: 'Let\'s go for a walk, ______?' },
  { id: 39, topicId: 'tag_questions', text: 'He has lived here for a long time, ______?' },
  { id: 40, topicId: 'tag_questions', text: 'Don\'t be late, ______?' },

  // 9. Passive Voice
  { id: 41, topicId: 'passive_voice', text: 'They built this house in 1990. -> This house ____________.' },
  { id: 42, topicId: 'passive_voice', text: 'She waters the flowers every morning. -> The flowers ____________.' },
  { id: 43, topicId: 'passive_voice', text: 'They will build a new bridge next year. -> A new bridge ____________.' },
  { id: 44, topicId: 'passive_voice', text: 'Somebody has stolen my bicycle. -> My bicycle ____________.' },
  { id: 45, topicId: 'passive_voice', text: 'People speak English all over the world. -> English ____________.' },

  // 10. Reported Speech
  { id: 46, topicId: 'reported_speech', text: '"I am busy now," said Nam. -> Nam said that ____________.' },
  { id: 47, topicId: 'reported_speech', text: '"Do you like pop music?" she asked me. -> She asked me ____________.' },
  { id: 48, topicId: 'reported_speech', text: '"Where do you live?" the teacher asked him. -> The teacher asked him ____________.' },
  { id: 49, topicId: 'reported_speech', text: '"Please give me the book," he said to her. -> He told her ____________.' },
  { id: 50, topicId: 'reported_speech', text: '"I went to Hue yesterday," Lan said. -> Lan said that ____________.' },

  // 11. Conditional Type 1
  { id: 51, topicId: 'cond_type1', text: 'If it (rain) ______, we will cancel the picnic.' },
  { id: 52, topicId: 'cond_type1', text: 'You will be late if you (not/hurry) ______.' },
  { id: 53, topicId: 'cond_type1', text: 'If she (study) ______ hard, she will pass the exam.' },
  { id: 54, topicId: 'cond_type1', text: 'I (call) ______ the police if you don\'t leave.' },
  { id: 55, topicId: 'cond_type1', text: 'What ______ you (do) ______ if you have free time tomorrow?' },

  // 12. Conditional Type 2
  { id: 56, topicId: 'cond_type2', text: 'If I (be) ______ you, I would study harder.' },
  { id: 57, topicId: 'cond_type2', text: 'If he (have) ______ a lot of money, he would travel around the world.' },
  { id: 58, topicId: 'cond_type2', text: 'I would help you if I (know) ______ the answer.' },
  { id: 59, topicId: 'cond_type2', text: 'If she (not/be) ______ so busy, she would come to the party.' },
  { id: 60, topicId: 'cond_type2', text: 'What ______ you (do) ______ if you saw a ghost?' },

  // 13. Relative Clauses
  { id: 61, topicId: 'relative_clauses', text: 'The man is my father. You met him yesterday. -> The man whom ____________.' },
  { id: 62, topicId: 'relative_clauses', text: 'This is the book. I bought it last week. -> This is the book which ____________.' },
  { id: 63, topicId: 'relative_clauses', text: 'The girl is very pretty. She lives next door. -> The girl who ____________.' },
  { id: 64, topicId: 'relative_clauses', text: 'Do you know the boy? His bicycle was stolen. -> Do you know the boy whose ____________?' },
  { id: 65, topicId: 'relative_clauses', text: 'This is the village. I was born there. -> This is the village where ____________.' },

  // 14. Comparisons
  { id: 66, topicId: 'comparisons', text: 'This car is (expensive) ______ than that one.' },
  { id: 67, topicId: 'comparisons', text: 'He is the (tall) ______ student in my class.' },
  { id: 68, topicId: 'comparisons', text: 'Today is (hot) ______ than yesterday.' },
  { id: 69, topicId: 'comparisons', text: 'This is the (interesting) ______ film I have ever seen.' },
  { id: 70, topicId: 'comparisons', text: 'Nothing is (good) ______ than going home.' },

  // 15. So...that / Such...that
  { id: 71, topicId: 'so_such', text: 'The tea is very hot. I can\'t drink it. -> The tea is so ____________.' },
  { id: 72, topicId: 'so_such', text: 'It was a very boring film. We left early. -> It was such ____________.' },
  { id: 73, topicId: 'so_such', text: 'She is so beautiful that everyone looks at her. -> She is such ____________.' },
  { id: 74, topicId: 'so_such', text: 'The questions were very hard. No one could answer them. -> The questions were so ____________.' },
  { id: 75, topicId: 'so_such', text: 'It is such a heavy box that I can\'t lift it. -> The box is so ____________.' },

  // 16. Too...to / Enough...to
  { id: 76, topicId: 'too_enough', text: 'He is very young. He can\'t drive a car. -> He is too ____________.' },
  { id: 77, topicId: 'too_enough', text: 'The water is warm. We can swim in it. -> The water is warm enough ____________.' },
  { id: 78, topicId: 'too_enough', text: 'She isn\'t tall enough to reach the shelf. -> She is too ____________.' },
  { id: 79, topicId: 'too_enough', text: 'This coat is too expensive for me to buy. -> This coat isn\'t cheap enough ____________.' },
  { id: 80, topicId: 'too_enough', text: 'The coffee is too strong for me to drink. -> The coffee isn\'t weak enough ____________.' },

  // 17. Suggest
  { id: 81, topicId: 'suggest', text: 'Why don\'t we go to the cinema? -> I suggest ____________.' },
  { id: 82, topicId: 'suggest', text: 'Let\'s put the garbage bins around the schoolyard. -> I suggest ____________.' },
  { id: 83, topicId: 'suggest', text: 'I suggest (take) ______ a shower instead of a bath to save water.' },
  { id: 84, topicId: 'suggest', text: '"Why don\'t you fix the dripping faucet?" -> He suggested that I (should) ____________.' },
  { id: 85, topicId: 'suggest', text: 'Shall we play badminton? -> I suggest ____________.' },

  // 18. Prefer / Would rather
  { id: 86, topicId: 'prefer', text: 'I prefer (watch) ______ TV to reading books.' },
  { id: 87, topicId: 'prefer', text: 'She would rather (stay) ______ at home than go out.' },
  { id: 88, topicId: 'prefer', text: 'I prefer coffee ______ tea. (to/than)' },
  { id: 89, topicId: 'prefer', text: 'He would rather you (go) ______ home now.' },
  { id: 90, topicId: 'prefer', text: 'They prefer living in the country to (live) ______ in the city.' },

  // 19. It takes...
  { id: 91, topicId: 'it_takes', text: 'I spent two hours doing my homework. -> It took ____________.' },
  { id: 92, topicId: 'it_takes', text: 'She spends 30 minutes walking to school every day. -> It takes ____________.' },
  { id: 93, topicId: 'it_takes', text: 'It took him a long time to recover from the illness. -> He spent ____________.' },
  { id: 94, topicId: 'it_takes', text: 'How long does it take you to get there? -> How much time do you spend ____________?' },
  { id: 95, topicId: 'it_takes', text: 'It takes us 10 minutes (walk) ______ to the bus stop.' },

  // 20. S-V Agreement: And / Each
  { id: 96, topicId: 'sv_and', text: 'Bread and butter (be) ______ my favorite breakfast.' },
  { id: 97, topicId: 'sv_and', text: 'My father and mother (be) ______ teachers.' },
  { id: 98, topicId: 'sv_and', text: 'Every student (have) ______ a book.' },
  { id: 99, topicId: 'sv_and', text: 'Each of the boys (play) ______ football well.' },
  { id: 100, topicId: 'sv_and', text: 'Fish and chips (be) ______ a popular dish in England.' },

  // 21. S-V Agreement: Number of
  { id: 101, topicId: 'sv_number', text: 'A number of students (be) ______ waiting for the bus.' },
  { id: 102, topicId: 'sv_number', text: 'The number of students in this class (be) ______ 40.' },
  { id: 103, topicId: 'sv_number', text: 'A number of people (have) ______ applied for the job.' },
  { id: 104, topicId: 'sv_number', text: 'The number of books in the library (increase) ______ every year.' },
  { id: 105, topicId: 'sv_number', text: 'A large number of tourists (visit) ______ this place annually.' },

  // 22. S-V Agreement: There / Indefinite
  { id: 106, topicId: 'sv_there', text: 'There (be) ______ a book and two pens on the table.' },
  { id: 107, topicId: 'sv_there', text: 'Everything (look) ______ beautiful today.' },
  { id: 108, topicId: 'sv_there', text: 'Someone (be) ______ knocking at the door.' },
  { id: 109, topicId: 'sv_there', text: 'Nobody (know) ______ the answer.' },
  { id: 110, topicId: 'sv_there', text: 'There (be) ______ many people at the party last night.' },

  // 23. S-V Agreement: Either / Neither
  { id: 111, topicId: 'sv_either', text: 'Neither John nor his friends (be) ______ going to the beach.' },
  { id: 112, topicId: 'sv_either', text: 'Either you or I (be) ______ wrong.' },
  { id: 113, topicId: 'sv_either', text: 'Not only the students but also the teacher (like) ______ the film.' },
  { id: 114, topicId: 'sv_either', text: 'Neither the teacher nor the students (be) ______ in the classroom.' },
  { id: 115, topicId: 'sv_either', text: 'Either my father or my mother (cook) ______ dinner tonight.' },

  // 24. Gerunds after Verbs
  { id: 116, topicId: 'gerunds', text: 'I enjoy (listen) ______ to pop music.' },
  { id: 117, topicId: 'gerunds', text: 'Would you mind (open) ______ the window?' },
  { id: 118, topicId: 'gerunds', text: 'He finished (do) ______ his homework.' },
  { id: 119, topicId: 'gerunds', text: 'You should avoid (eat) ______ too much sugar.' },
  { id: 120, topicId: 'gerunds', text: 'She suggested (go) ______ for a picnic.' },

  // 25. To-Infinitive
  { id: 121, topicId: 'to_infinitive', text: 'I want (buy) ______ a new car.' },
  { id: 122, topicId: 'to_infinitive', text: 'They decided (go) ______ to Hue.' },
  { id: 123, topicId: 'to_infinitive', text: 'He promised (not/tell) ______ anyone.' },
  { id: 124, topicId: 'to_infinitive', text: 'She refused (answer) ______ my questions.' },
  { id: 125, topicId: 'to_infinitive', text: 'Don\'t forget (turn) ______ off the lights.' },

  // 26. Prepositions & Phrasal
  { id: 126, topicId: 'prepositions', text: 'She is interested in (learn) ______ English.' },
  { id: 127, topicId: 'prepositions', text: 'He gave up (smoke) ______ two years ago.' },
  { id: 128, topicId: 'prepositions', text: 'I am looking forward to (hear) ______ from you.' },
  { id: 129, topicId: 'prepositions', text: 'Thank you for (help) ______ me.' },
  { id: 130, topicId: 'prepositions', text: 'They are used to (drive) ______ on the left.' },

  // 27. Modals
  { id: 131, topicId: 'modals', text: 'You (must/can) ______ stop when the traffic light is red.' },
  { id: 132, topicId: 'modals', text: '(May/Must) ______ I ask you a question?' },
  { id: 133, topicId: 'modals', text: 'You (should/might) ______ see a doctor if you feel sick.' },
  { id: 134, topicId: 'modals', text: 'It is necessary for you to do this. -> You must ____________.' },
  { id: 135, topicId: 'modals', text: 'Perhaps he is at home. -> He might ____________.' },

  // 28. Wish
  { id: 136, topicId: 'wish', text: 'I wish I (be) ______ a millionaire.' },
  { id: 137, topicId: 'wish', text: 'She wishes she (can) ______ speak English well.' },
  { id: 138, topicId: 'wish', text: 'I wish it (not/rain) ______ now.' },
  { id: 139, topicId: 'wish', text: 'He wishes he (know) ______ her phone number.' },
  { id: 140, topicId: 'wish', text: 'They wish they (have) ______ a bigger house.' },

  // 29. V-ing as Subject
  { id: 141, topicId: 'ving_subject', text: '(Learn) ______ English is very important.' },
  { id: 142, topicId: 'ving_subject', text: '(Play) ______ video games (be) ______ not good for your eyes.' },
  { id: 143, topicId: 'ving_subject', text: '(Smoke) ______ causes lung cancer.' },
  { id: 144, topicId: 'ving_subject', text: '(Collect) ______ stamps is my hobby.' },
  { id: 145, topicId: 'ving_subject', text: '(Jog) ______ every morning helps keep you fit.' },

  // 30. Be going to
  { id: 146, topicId: 'be_going_to', text: 'Look at those dark clouds! It (rain) ______.' },
  { id: 147, topicId: 'be_going_to', text: 'I (visit) ______ my grandparents this weekend (plan).' },
  { id: 148, topicId: 'be_going_to', text: 'What ______ you (do) ______ tonight?' },
  { id: 149, topicId: 'be_going_to', text: 'She (buy) ______ a new dress for the party.' },
  { id: 150, topicId: 'be_going_to', text: 'We (not/play) ______ tennis tomorrow.' },
];