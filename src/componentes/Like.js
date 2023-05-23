import React from 'react';
import "../styles/Like.css"
import KafkaService from "../services/kafka.service";


function saveLike(e, status) {
     let data = {
       id: 0,
       status: status
     };
     console.log(JSON.stringify(data));
     KafkaService.reaction("i-like-adsoftsito");
     e.preventDefault();
}

function saveLove(e, status) {
  let data = {
    id: 0,
    status: status
  };
  console.log(JSON.stringify(data));
  KafkaService.reaction("i-love-adsoftsito");
  e.preventDefault();
}

function saveSad(e, status) {
  let data = {
    id: 0,
    status: status
  };
  console.log(JSON.stringify(data));
  KafkaService.reaction("i-sad-adsoftsito");
  e.preventDefault();
}

function saveAngry(e, status) {
  let data = {
    id: 0,
    status: status
  };
  console.log(JSON.stringify(data));
  KafkaService.reaction("i-angry-adsoftsito");
  e.preventDefault();
}

function saveWow(e, status) {
  let data = {
    id: 0,
    status: status
  };
  console.log(JSON.stringify(data));
  KafkaService.reaction("i-wow-adsoftsito");
  e.preventDefault();
}

function saveHaha(e, status) {
  let data = {
    id: 0,
    status: status
  };
  console.log(JSON.stringify(data));
  KafkaService.reaction("i-haha-adsoftsito");
  e.preventDefault();
}


function ReactionsComponent() {
  return (
    <div class="reactions">

      <div class="reaction reaction-like" onClick={(e) => {
        e.preventDefault();
        saveLike(e, 1);
      }}>
      </div>

      <div className="reaction reaction-love" onClick={(e) => {
        e.preventDefault();
        saveLove(e, 1);
      }}>
      </div>

      <div class="reaction reaction-haha" onClick={(e) => {
        e.preventDefault();
        saveHaha(e, 1);
      }}>
      </div>

      <div class="reaction reaction-wow" onClick={(e) => {
        e.preventDefault();
        saveWow(e, 1);
      }}> </div>

      <div class="reaction reaction-sad" onClick={(e) => {
        e.preventDefault();
        saveSad(e, 1);
      }}></div>

      <div class="reaction reaction-angry" onClick={(e) => {
        e.preventDefault();
        saveAngry(e, 1);
      }}></div>
      
    </div>
  );
} 
export default ReactionsComponent;