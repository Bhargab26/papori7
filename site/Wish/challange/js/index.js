// ⟁ \\
using System.Collections;
 using System.Collections.Generic;
 using UnityEngine.UI;
 using UnityEngine;
 
 
 public class Button_Fade_In : MonoBehaviour
 {
     [SerializeField]
     private float _sec;
     public GameObject _objectToActivate;
    
 
     private void Start()
     {
         if (gameObject.activeInHierarchy)
             gameObject.SetActive(false);
 
         StartCoroutine(ActivationRoutine());
     }
 
     private IEnumerator ActivationRoutine()
     {
 
         yield return new WaitForSeconds(_sec * Time.deltaTime);
 
         gameObject.SetActive(true);
     }