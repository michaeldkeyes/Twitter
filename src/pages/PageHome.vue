<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen"
      ><div class="1-py-lg q-px-md row items-end q-col-gutter-md">
        <div class="col">
          <q-input
            v-model="newTweetContent"
            class="new-tweet"
            placeholder="What's happening?"
            maxlength="280"
            bottom-slots
            counter
            autogrow
          >
            <template v-slot:before>
              <q-avatar size="xl">
                <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
              </q-avatar>
            </template>
          </q-input>
        </div>
        <div class="col col-shrink">
          <q-btn
            :disable="!newTweetContent"
            class="q-mb-lg"
            color="primary"
            label="Tweet"
            rounded
            unelevated
            no-caps
            @click="addNewTweet"
          />
        </div>
      </div>

      <q-separator class="divider" size="10px" color="grey-2" />

      <q-list separator>
        <transition-group
          appear
          enter-active-class="animated fadeIn slow"
          leave-active-class="animated fadeOut slow"
        >
          <q-item v-for="tweet in tweets" :key="tweet.id" class="q-py-md tweet">
            <q-item-section avatar top>
              <q-avatar size="xl">
                <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1">
                <strong>Janet</strong>
                <span class="text-grey-7">
                  @janet <br class="lt-md" />
                  &bull; {{ tweet.date | relativeDate }} ago</span
                >
              </q-item-label>
              <q-item-label class="tweet-content text-body1">
                {{ tweet.content }}
              </q-item-label>
              <div class="tweet-icons row justify-between q-mt-sm">
                <q-btn
                  color="grey"
                  icon="far fa-comment"
                  size="sm"
                  flat
                  round
                />
                <q-btn
                  color="grey"
                  icon="fas fa-retweet"
                  size="sm"
                  flat
                  round
                />
                <q-btn color="grey" icon="far fa-heart" size="sm" flat round />
                <q-btn
                  color="grey"
                  icon="fas fa-trash"
                  size="sm"
                  flat
                  round
                  @click="deleteTweet(tweet)"
                />
              </div>
            </q-item-section>
          </q-item>
        </transition-group> </q-list
    ></q-scroll-area>
  </q-page>
</template>

<script>
import db from "src/boot/firebase";
import { formatDistance } from "date-fns";

export default {
  name: "PageHome",
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date());
    },
  },
  data() {
    return {
      newTweetContent: "",
      tweets: [],
    };
  },
  mounted() {
    db.collection("tweets")
      .orderBy("date")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          let tweetChange = change.doc.data();
          tweetChange.id = change.doc.id;
          if (change.type === "added") {
            this.tweets.unshift(tweetChange);
          }
          if (change.type === "modified") {
            console.log("Modified tweet: ", tweetChange);
          }
          if (change.type === "removed") {
            let index = this.tweets.findIndex(
              (tweet) => tweet.id === tweetChange.id
            );
            this.tweets.splice(index, 1);
          }
        });
      });
  },
  methods: {
    addNewTweet() {
      let newTweet = {
        content: this.newTweetContent,
        date: Date.now(),
      };
      db.collection("tweets").add(newTweet);
      this.newTweetContent = "";
    },
    deleteTweet(tweet) {
      db.collection("tweets")
        .doc(tweet.id)
        .delete()
        .catch((error) => {
          console.log("Error removing tweet", error);
        });
    },
  },
};
</script>

<style lang="sass">
.new-tweet
  textarea
    font-size: 19px
    line-height: 1.4

.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4

.tweet-content
  white-space: pre-line

.tweet-icons
  margin-left: -5px

.tweet:not(:first-child)
  border-top: 1px solid rgba(0, 0, 0, 0.12)
</style>