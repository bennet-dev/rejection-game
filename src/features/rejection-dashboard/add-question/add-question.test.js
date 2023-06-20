import { describe } from "riteway";
import render from "riteway/render-component";
// import withRedux from "@/lib/redux/with-redux";

// import AddQuestionModal from "./add-question-modal";

// const AddQuestionModalWithRedux = withRedux(AddQuestionModal);

describe("AddQuestionModal", async assert => {

    const $ = render(<div></div>);

    assert({
        given: "No arguments",
        should: "render a modal title",
        actual: $(".title").length,
        expected: 1
    });

    assert({
        given: "No arguments",
        should: "render question input",
        actual: $("#question").length,
        expected: 1
    });

    assert({
        given: "No arguments",
        should: "render askee input",
        actual: $("#askee").length,
        expected: 1
    });

    assert({
        given: "No arguments",
        should: "render status select",
        actual: $("#status").length,
        expected: 1
    });

    assert({
        given: "No arguments",
        should: "render a submit button",
        actual: $("button[type='submit']").length,
        expected: 1
    });
});
