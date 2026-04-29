<script setup></script>

<template>
  <el-backtop :right="40" :bottom="40" :visibility-height="300">
    <div class="back-to-top">
      <el-icon :size="20"><ArrowUp /></el-icon>
    </div>
  </el-backtop>
</template>

<style scoped>
.back-to-top {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-fast);
}

.back-to-top:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
}
</style>
