import { useRouter } from 'vue-router';

export function useNav(condition, name) {
    const router = useRouter();
  
    function redirect() {
      if (condition) {
        router.push({ name: name });
      }
    }
  
    return {
      redirect
    };
  }