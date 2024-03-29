<template>
    
 <div class="member-profile">
    <h2>회원 정보</h2>
    <div class="member-details">
      <p><strong>이름:</strong> {{ member.name }}</p>
      <p><strong>등록일:</strong> {{ member.register_Date }}</p>
      <p><strong>잔여일:</strong> {{ member.remain_Date }}</p>
      <p><strong>PT 횟수:</strong> {{ member.ptCount }}</p>
    </div>
    <button @click="showTrainers" class="pt-button">PT 등록</button>
    <div v-if="showTrainersList" class="trainers-list">
      <h3>강사 리스트</h3>
      <ul>
        <li v-for="trainer in trainers" :key="trainer.id">{{ trainer.name }}</li>
      </ul>
    </div> 
  </div>
   
</template>


<script>
export default {
    name: "AfterLoginFormView",
    components: {},
    data() {
        return {
            member: {
        name: '사용자 이름',
        register_Date: '등록일',
        remain_Date: '잔여일',
        ptCount: 'PT 횟수'
      },
      showTrainersList: false,
      trainers: [
        { id: 1, name: '강사 1' },
        { id: 2, name: '강사 2' },
        { id: 3, name: '강사 3' }
      ]
    };
    },
    
    methods: {
        showTrainers() {
      this.showTrainersList = !this.showTrainersList;
        }
    },
    created(){}
};
</script>


<style scoped>
.member-profile {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.member-details {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.pt-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #73cae9;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pt-button:hover {
  background-color: hsla(213, 100%, 37%, 0.748);
}

.trainers-list {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.trainers-list h3 {
  margin-top: 0;
}

.trainers-list ul {
  list-style-type: none;
  padding: 0;
}

.trainers-list ul li {
  margin-bottom: 5px;
}
</style>