import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

describe("_saveQuestion1", () => {
  it("should be successful", async () => {
    const response = await _saveQuestion({
      optionOneText: "be a dog",
      optionTwoText: "be a cat",
      author: "joe smith",
    });

    expect(response).toBeTruthy();
  });
});

describe("_saveQuestion2", () => {
  it("should throw error for bad input", async () => {
    const response = await _saveQuestion({
      optionOneText: "be a dog",
      optionTwoText: undefined,
      author: "joesmith",
    }).catch((e) => e);

    expect(response).toBe(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer1", () => {
  it("should be successful", async () => {
    const response = await _saveQuestionAnswer({
      authedUser: "sarahedo",
      qid: "am8ehyc8byjqgar0jgpub9",
      answer: "optionTwo",
    });

    expect(response).toBeTruthy();
  });
});

describe("_saveQuestionAnswer2", () => {
  it("should throw error for bad input", async () => {
    const response = await _saveQuestionAnswer({
      authedUser: "sarahedo",
      quid: undefined,
      answer: "optionOne",
    }).catch((e) => e);

    expect(response).toBe("Please provide authedUser, qid, and answer");
  });
});
