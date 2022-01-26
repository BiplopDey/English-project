import { restApiRepository } from "../repository/restApiRepository";
import { urlList } from "../repository/urlList";
import { wordService } from "./wordService";

export const wordsListService = {
  list: [],
  error: null,
  dicctionaryRepository: restApiRepository.setUrl(urlList.dicctionary),

  addAll(list) {
    this.list = [...list];
  },

  async fetchFavorites() {
    await this.fetchAll();
    this.addAll(this.list.filter((e) => e.star == true));
  },

  async toggleStar(word) {
    word.star = !word.star;
    await this.update(word);
  },

  async fetchAll() {
    try {
      const words = await this.dicctionaryRepository.fetchAll();
      this.addAll(words.reverse());
    } catch (err) {
      this.error = err;
    }
  },

  async fetchWords() {
    await this.fetchAll();
    this.addAll(this.list.filter((e) => !e.isSentence)); //e.isWord || e.isPhrasalVerb));
  },

  async fetchPhrasalVerb() {
    await this.fetchAll();
    this.addAll(this.list.filter((e) => e.isPhrasalVerb)); //e.isWord || e.isPhrasalVerb));
  },

  async fetchSentence() {
    await this.fetchAll();
    this.addAll(this.list.filter((e) => e.isSentence));
  },

  async add(word) {
    word.star = false;
    const name = word.name;
    console.log(wordService.isPhrasalVerb(name));
    if (wordService.isWord(name)) {
      word.isWord = true;
    }
    if (wordService.isPhrasalVerb(name)) {
      word.isPhrasalVerb = true;
    }
    if (wordService.isSentence(name)) {
      word.isSentence = true;
    }
    const response = await this.dicctionaryRepository.create(word);
    this.list = [response, ...this.list];
  },

  async delete(word) {
    await this.dicctionaryRepository.deleteById(word.id);
    this.list.splice(this.findIndexById(word.id), 1);
  },

  async update(word) {
    const response = await this.dicctionaryRepository.update(word);
    this.list[this.findIndexById(word.id)] = response;
  },

  findIndexById(id) {
    return this.list.findIndex((word) => word.id == id);
  },

  isEmpty() {
    return this.list.length === 0;
  },

  startsWith(str) {
    return this.list.filter((word) => word.name.startsWith(str));
  },
};
