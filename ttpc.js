'use strict';

const CARDS = /Card\s*{\s*value\s*=\s*(?<value>\w+),\s*suit\s*=\s*(?<suit>\w+)}/g
const SUIT = {
    'Heart': 0x1F0B0,
    'Diamond': 0x1F0C0,
    'Club': 0x1F0D0,
    'Spade': 0x1F0A0
};
const VALUE = {
    'Two': 2,
    'Three': 3,
    'Four': 4,
    'Five': 5,
    'Six': 6,
    'Seven': 7,
    'Eight': 8,
    'Nine': 9,
    'Ten': 10,
    'Jack': 11,
    'Queen': 13,
    'King': 14,
    'Ace': 1,
};

function getCard(suit, value) {
    return String.fromCodePoint(SUIT[suit] + VALUE[value]);
}

function getCardsFromString(string) {
    let cards = '';

    [...string.matchAll(CARDS)].forEach(card => {
        cards += getCard(card.groups.suit, card.groups.value);
    });

    return cards;
}

let inputEl = document.getElementById('text-input');
let outputEl = document.getElementById('text-output');
let previewEl = document.getElementById('card-preview');

const evalCard = (v) => outputEl.innerText = getCardsFromString(v);

inputEl.addEventListener('input', e => evalCard(e.target.value));
previewEl.addEventListener('click', e => {
    inputEl.value = inputEl.value + e.target.innerText;
    evalCard(inputEl.value);
});
