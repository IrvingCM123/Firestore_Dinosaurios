import React, { Component } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import TutorialDataService from "../servicios/dinosaurio.service";

function ReactionButton({ reactionType, onClick, count }) {
  return (
    <button onClick={onClick}>
      {reactionType}: {count}
    </button>
  );
}

export default class DinosaurioReacciones extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTutorial: {
      },
      reactions: {
        like: 0,
        love: 0,
        haha: 0,
        wow: 0,
        sad: 0,
        angry: 0,
      },
      comment: "",
    };
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleReactionClick(reactionType) {
    const newReactions = { ...this.state.reactions };
    newReactions[reactionType]++;
    this.setState({ reactions: newReactions });

    const itemRef = firebase
      .firestore()
      .collection("items")
      .doc(this.state.currentTutorial.id);
    itemRef.update({
      [`${reactionType}_count`]: firebase.firestore.FieldValue.increment(1),
    });
  }

  render() {
    const { currentTutorial, reactions, comment } = this.state;

    return (
      <div>
        <h4> Dinosaurio </h4>-3+
        <div>
          <ReactionButton
            reactionType="Like"
            onClick={() => this.handleReactionClick("like")}
            count={reactions.like}
          />
          <ReactionButton
            reactionType="Love"
            onClick={() => this.handleReactionClick("love")}
            count={reactions.love}
          />
          <ReactionButton
            reactionType="Haha"
            onClick={() => this.handleReactionClick("haha")}
            count={reactions.haha}
          />
          <ReactionButton
            reactionType="Wow"
            onClick={() => this.handleReactionClick("wow")}
            count={reactions.wow}
          />
          <ReactionButton
            reactionType="Sad"
            onClick={() => this.handleReactionClick("sad")}
            count={reactions.sad}
          />
          <ReactionButton
            reactionType="Angry"
            onClick={() => this.handleReactionClick("angry")}
            count={reactions.angry}
          />
        </div>

      </div>
    );
  }
}